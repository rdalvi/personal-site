"use client";
import React, { useState } from "react";
import ReactFlow, { Background, Controls, MiniMap, Node, getBezierPath, EdgeProps } from "reactflow";
import "reactflow/dist/style.css";

const CustomNode = ({ data }: any) => (
  <div style={{ borderRadius: 12, background: "#23272f", color: "#fff", border: "2px solid #4f46e5", padding: 8 }}>
    <a
      href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#60a5fa", textDecoration: "underline" }}
    >
      {data.label}
    </a>
  </div>
);

const ChoiceArchNode = ({ data }: any) => (
  <div style={{ borderRadius: 12, background: "#818cf8", color: "#18181b", border: "2px solid #23272f", padding: 8, fontWeight: 400, fontSize: 16 }}>
    <a
      href="https://en.wikipedia.org/wiki/Choice_architecture"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#18181b", textDecoration: "underline", fontWeight: 400, fontSize: 16 }}
    >
      &quot;{data.label}&quot;
    </a>
  </div>
);

const nodes = [
  { id: "mle", position: { x: -250, y: 200 }, data: { label: "Maximum Likelihood Estimation" }, style: { borderRadius: 12, background: "#23272f", color: "#fff", border: "2px solid #4f46e5", padding: 8 } },
  { id: "information", position: { x: 0, y: 200 }, data: { label: "Information" }, style: { borderRadius: 12, background: "#23272f", color: "#fff", border: "2px solid #4f46e5", padding: 8 } },
  { id: "entropy", position: { x: 0, y: 300 }, data: { label: "Entropy" }, style: { borderRadius: 12, background: "#23272f", color: "#fff", border: "2px solid #4f46e5", padding: 8 } },
  { id: "ood", position: { x: -200, y: 400 }, data: { label: "Out Of Distribution Problems (And Other Hard Problems)" }, style: { borderRadius: 12, background: "#4f46e5", color: "#fff", border: "2px solid #23272f", padding: 8 } },
  { id: "equilibrium", position: { x: 200, y: 400 }, data: { label: "Equilibrium Processes" }, style: { borderRadius: 12, background: "#4f46e5", color: "#fff", border: "2px solid #23272f", padding: 8 } },
  { id: "market_failures", position: { x: -300, y: 500 }, data: { label: "Market Failures" }, style: { borderRadius: 12, background: "#4f46e5", color: "#fff", border: "2px solid #23272f", padding: 8 } },
  { id: "market_power", position: { x: 100, y: 500 }, data: { label: "Market Power" }, style: { borderRadius: 12, background: "#4f46e5", color: "#fff", border: "2px solid #23272f", padding: 8 } },
  { id: "decadence", position: { x: -350, y: 600 }, data: { label: "Decadence" }, style: { borderRadius: 12, background: "#818cf8", color: "#fff", border: "2px solid #23272f", padding: 8 } },
  { id: "paternalism", position: { x: 0, y: 600 }, data: { label: "Paternalism" }, style: { borderRadius: 12, background: "#818cf8", color: "#fff", border: "2px solid #23272f", padding: 8 } },
];

const edges = [
  { id: "e2", source: "mle", target: "information", sourcePosition: "right", targetPosition: "left", data: { hover: "The bitter lesson: With enough data, every previously human-solved problem is a problem of maximum likelihood estimation.", link: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html" } },
  { id: "e4", source: "information", target: "entropy", data: { hover: "Jayne's principle: thermodynamic entropy is an instance of Shannon entropy.", link: "https://en.wikipedia.org/wiki/Jaynes_conjecture" } },
  { id: "e5", source: "ood", target: "mle", data: { hover: "Hard problems to solve are the ones that cannot be solved by pattern matching." } },
  { id: "e6", source: "entropy", target: "equilibrium", type: "linkEdge", data: { hover: "Equilibrium is achieved at maximum entropy.", link: "https://en.wikipedia.org/wiki/Entropy_(statistical_thermodynamics)" } },
  { id: "e8", source: "ood", target: "market_power", data: { hover: "Market power is obtained by providing a good or service that others cannot provide. Sometimes this is a result of network effects, brand, or other moats; often it is by solving hard problems." } },
  { id: "e9", source: "market_failures", target: "decadence", data: { hover: "Modern decadence stems from consumers' irrational inability to select for what will help them really live well.", link: "https://www.britannica.com/topic/eudaimonia" } },
  { id: "e10", source: "market_failures", target: "paternalism", data: { hover: "Paternalism is needed to solve market failures." } },
  { id: "e13", source: "equilibrium", target: "market_power", data: { hover: "Market power is lost as the market equilibrates - knowledge diffuses so hard problems become more generally solvable, and switching barriers are gradually overcome. Lasting market power is rare - impossible-to-replicate effects, impossibly expensive Capex investments." } },
  { id: "e15", source: "decadence", target: "ood", data: { hover: "Solving decadence is a very hard problem." } },
];

const nodeTypes = { bitterLesson: CustomNode };

const CustomEdge = (props: EdgeProps) => {
  const { id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd, data } = props;
  const [hovered, setHovered] = useState(false);
  const [path, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY });
  const hasLink = data && data.link;
  return (
    <g style={{ cursor: data && (data.hover || hasLink) ? "pointer" : "default", zIndex: 10000 }}>
      <path
        id={id}
        style={{ stroke: hovered ? "#60a5fa" : "#818cf8", strokeWidth: hovered ? 6 : 4, ...style }}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEnd}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => hasLink && window.open(data.link, "_blank")}
      />
      {hovered && data && data.hover && (
        <foreignObject x={labelX - 180} y={labelY - 60} width={360} height={80} style={{ pointerEvents: "all", zIndex: 99999, position: "relative" }}>
          <div style={{ background: "#fff", color: "#18181b", borderRadius: 12, padding: 16, fontSize: 14, textAlign: "center", border: hasLink ? "3px solid #60a5fa" : "3px solid #23272f", boxShadow: "0 8px 32px #000a", fontWeight: 500, zIndex: 99999, position: "relative" }}>
            {data.hover}
            {hasLink && (
              <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", marginLeft: 8, textDecoration: "underline", fontWeight: 700 }}>
                [link]
              </a>
            )}
          </div>
        </foreignObject>
      )}
    </g>
  );
};

const edgeTypes = { linkEdge: CustomEdge, default: CustomEdge };

export default function DAGDiagram() {
  return (
    <div style={{ width: "100%", height: 700, background: "#18181b", borderRadius: 16 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        panOnDrag
        zoomOnScroll
        minZoom={0.2}
        maxZoom={2}
        style={{ background: "#18181b" }}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ type: 'default' }}
      >
        <MiniMap nodeColor={(n: Node) => typeof n.style?.background === "string" ? n.style.background : "#23272f"} />
        <Controls />
        <Background gap={16} size={1} color="#23272f" />
      </ReactFlow>
    </div>
  );
} 