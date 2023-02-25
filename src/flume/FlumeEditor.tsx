import { NodeEditor } from "flume";
import config from "./config.js";

import css from "./FlumeEditor.module.css";
import { useCallback, useRef, useState } from "react";

export function FlumeEditor() {
  const editorRef = useRef();
  const [nodes, setNodes] = useState();

  const getNodesData = useCallback(() => {
    const nodeData = (editorRef.current as any).getNodes();
    setNodes(nodeData);
  }, [setNodes]);

  return (
    <section className={css.container}>
      <h1>Flume:</h1>
      <div className={css.editorWrapper}>
        <NodeEditor
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
          ref={editorRef}
          defaultNodes={[
            {
              type: "homepage",
              x: 0,
              y: 0,
            },
          ]}
        />
      </div>
      <details>
        <summary onClick={getNodesData}>See nodes data</summary>
        <code>{JSON.stringify(nodes, undefined, 2)}</code>
      </details>
    </section>
  );
}
