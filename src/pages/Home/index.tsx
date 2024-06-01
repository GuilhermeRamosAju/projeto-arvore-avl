import React from "react";
import { motion } from "framer-motion";
import CreattionButton from "../../components/CreationButton";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
        className="flex flex-col justify-center h-[96vh] items-center gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-5xl font-bold text-amber-200"
          variants={itemVariants}
        >
          <h1>Árvore AVL</h1>
        </motion.div>
        <motion.div className="w-[100%] text-justify" variants={itemVariants}>
          <p className="text-white text-2xl ">
            Uma árvore AVL é uma árvore binária de busca balanceada, ou seja,
            uma árvore binária de busca que possui uma propriedade adicional: a
            altura de suas subárvores esquerda e direita não podem diferir em
            mais de uma unidade.
          </p>
        </motion.div>
        <motion.div
          className="text-white text-2xl w-[100%] flex flex-col mt-8 gap-6"
          variants={itemVariants}
        >
          <h2 className="text-3xl text-amber-200">
            <span>⏺️</span>O passo a passo de uma inserção em uma árvore avl é:
          </h2>
          <ul className="flex text-center">
            <motion.li variants={itemVariants}>
              <span>1️⃣</span>Inserir o nó normalmente
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>2️⃣</span>Atualizar a altura dos nós
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>3️⃣</span>Verificar o balanceamento
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>4️⃣</span>Realizar as rotações necessárias
            </motion.li>
          </ul>
        </motion.div>
        <motion.div className="mt-6" variants={itemVariants}>
          <CreattionButton
            onClick={() => navigate("/projeto-arvore-avl/tree-creation")}
            text="Criar Árvore AVL"
            type="start"
          />
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
