import React from "react";
import { AVLNode } from "../../logic/insertAVL";
import "./styles.css";

interface TreeNodeProps {
  node: AVLNode | null;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  if (!node) return null;

  return (
    <div className="tree-node">
      <div className="node-value">{node.key}</div>
      <div className="children">
        <TreeNode node={node.left} />

        <TreeNode node={node.right} />
      </div>
    </div>
  );
};

export default TreeNode;
