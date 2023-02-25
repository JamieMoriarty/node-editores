import { FlumeConfig, Colors, Controls } from "flume";

const config = new FlumeConfig();

config
  .addPortType({
    type: "string",
    name: "string",
    label: "Text",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "string",
        label: "Text",
      }),
    ],
  })
  .addPortType({
    type: "boolean",
    name: "boolean",
    label: "True/False",
    color: Colors.blue,
    controls: [
      Controls.checkbox({
        name: "boolean",
        label: "True/False",
      }),
    ],
  })
  .addPortType({
    type: "number",
    name: "number",
    label: "Number",
    color: Colors.red,
    controls: [
      Controls.number({
        name: "number",
        label: "Number",
      }),
    ],
  })
  .addNodeType({
    type: "raw-metric-id",
    label: "Raw metric id",
    description: "Input a raw metric id, outputs value of it",
    inputs: (ports) => [ports.string()],
    outputs: (ports) => [ports.number()],
  })
  .addNodeType({
    type: "threshold-+",
    label: "Threshold above",
    description: "Outputs whether the input is bigger than the threshold",
    initialWidth: 140,
    inputs: (ports) => [
      ports.number({ name: "input-number", label: "Metric value" }),
      ports.number({ name: "threshold", label: "Threshold" }),
    ],
    outputs: (ports) => [ports.boolean()],
  })
  .addNodeType({
    type: "and",
    label: "And",
    description: "Outputs true if both inputs are true, otherwise false",
    initialWidth: 160,
    inputs: (ports) => [
      ports.boolean({
        name: "first-item",
        label: "First item",
      }),
      ports.boolean({
        name: "second-item",
        label: "Second item",
      }),
    ],
    outputs: (ports) => [
      ports.boolean({
        name: "and-value",
        label: "output",
      }),
    ],
  })
  .addRootNodeType({
    type: "homepage",
    label: "Metric defintion",
    initialWidth: 170,
    inputs: (ports) =>
      new Array(5)
        .fill(0)
        .map((_, index) =>
          ports.boolean({ name: `input-${index}`, label: `Input ${index}` })
        ),
  });

export default config;
