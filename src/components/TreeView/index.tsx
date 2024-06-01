import React from "react";
import TreeNode from "../TreeNode";
import { AVLNode } from "../../logic/insertAVL";
import "./styles.css";

interface TreeViewProps {
  root: AVLNode | null;
}

const TreeView: React.FC<TreeViewProps> = ({ root }) => {
  return (
    <div className="tree-view">
      <TreeNode node={root} />
    </div>
  );
};

export default TreeView;
