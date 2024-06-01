import React, { useState } from "react";
import { motion } from "framer-motion";
import { AVLNode, AVLTree } from "../../logic/insertAVL";
import CreationButton from "../../components/CreationButton";
import CreationInsert from "../../components/CreationInsert";
import TreeView from "../../components/TreeView";
import Footer from "../../components/Footer";

const TreeCreation: React.FC = () => {
  const [insertValue, setInsertValue] = useState("");
  const [avlTree, setAvlTree] = useState<AVLNode | null>(null);
  const [validationMessage, setValidationMessage] = useState("");

  const tree = new AVLTree();

  const handleInsert = () => {
    if (!insertValue) {
      setValidationMessage("Insira um valor para inserir na árvore.");
      return;
    }
    if (+insertValue < 0 || +insertValue > 100) {
      setValidationMessage(
        "Insira um valor válido para inserir na árvore. (0-100)"
      );
      return;
    }
    setValidationMessage("");
    const value = parseInt(insertValue);
    if (!isNaN(value)) {
      const newTree = tree.insert(avlTree, value);
      setAvlTree(newTree);
      setInsertValue("");
    }
  };

  const handleReset = () => {
    setAvlTree(null);
    setInsertValue("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="flex flex-col h-[90vh] items-center gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-3xl font-bold text-amber-200"
          variants={itemVariants}
        >
          <h1>Criação de Árvore AVL</h1>
        </motion.div>
        <span className="text-red-500">{validationMessage}</span>

        <motion.div className="flex gap-3" variants={itemVariants}>
          <CreationInsert
            placeholder="Insira aqui o valor do nó"
            value={insertValue}
            onChangeText={(value) => setInsertValue(value)}
          />
          <CreationButton
            onClick={handleInsert}
            text="Inserir Nó"
            type="insert"
          />
          <CreationButton
            onClick={handleReset}
            text="Resetar Árvore"
            type="reset"
          />
        </motion.div>

        <motion.div className="mt-6" variants={itemVariants}>
          <TreeView root={avlTree} />
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default TreeCreation;
