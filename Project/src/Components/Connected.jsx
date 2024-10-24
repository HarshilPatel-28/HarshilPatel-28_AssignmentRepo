import React from "react";
import { motion } from "framer-motion";

const Connected = (props) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 12px rgba(0, 153, 255, 0.8)",
      transition: { yoyo: Infinity },
    },
  };

  const inputVariants = {
    hover: { borderColor: "#00ccff", transition: { duration: 0.3 } },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="connected-container"
      style={{
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#0a0f1f",
        borderRadius: "15px",
        color: "#e6f1ff",
        maxWidth: "800px",
        margin: "auto",
        overflowX: "auto", // Added to control overflow
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="connected-header"
        style={{
          fontSize: "28px",
          marginBottom: "25px",
          fontWeight: "600",
          letterSpacing: "2px",
          color: "#00ccff",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        You are Connected to MetaMask
      </motion.h1>

      <p
        className="connected-account"
        style={{ fontSize: "18px", marginBottom: "15px" }}
      >
        <strong>Metamask Account:</strong> {props.account}
      </p>
      <p
        className="connected-account"
        style={{ fontSize: "18px", marginBottom: "25px" }}
      >
        <strong>Remaining Time:</strong> {props.remainingTime}
      </p>

      {props.showButton ? (
        <p
          className="connected-account"
          style={{ color: "#ff3366", fontWeight: "bold", marginBottom: "25px" }}
        >
          You have already voted
        </p>
      ) : (
        <motion.div
          style={{ marginBottom: "25px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <motion.input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
            style={{
              padding: "12px",
              width: "240px",
              marginRight: "15px",
              border: "2px solid #1c2b44",
              borderRadius: "8px",
              backgroundColor: "#0a0f1f",
              color: "#e6f1ff",
              transition: "border-color 0.3s ease",
            }}
            variants={inputVariants}
            whileHover="hover"
          />
          <motion.button
            className="login-button"
            onClick={props.voteFunction}
            style={{
              padding: "12px 30px",
              backgroundColor: "#00ccff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            variants={buttonVariants}
            whileHover="hover"
          >
            Vote
          </motion.button>
        </motion.div>
      )}

      <motion.table
        id="myTable"
        className="candidates-table"
        style={{
          width: "100%",
          maxWidth: "100%",
          borderCollapse: "separate",
          borderSpacing: "0 10px",
          marginTop: "30px",
          color: "#e6f1ff",
          tableLayout: "fixed", // Ensures proper alignment of table
        }}
        initial="hidden"
        animate="visible"
      >
        <thead>
          <tr style={{ backgroundColor: "#1c2b44" }}>
            <th
              style={{
                padding: "12px",
                borderBottom: "2px solid #00ccff",
                width: "10%",
              }}
            >
              Index
            </th>
            <th
              style={{
                padding: "12px",
                borderBottom: "2px solid #00ccff",
                width: "60%",
              }}
            >
              Candidate Name
            </th>
            <th
              style={{
                padding: "12px",
                borderBottom: "2px solid #00ccff",
                width: "30%",
              }}
            >
              Candidate Votes
            </th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <motion.tr key={index} variants={tableRowVariants}>
              <td
                style={{
                  padding: "12px",
                  backgroundColor: "#142038",
                  borderRadius: "8px 0 0 8px",
                }}
              >
                {candidate.index + 1}
              </td>
              <td style={{ padding: "12px", backgroundColor: "#142038" }}>
                {candidate.name}
              </td>
              <td
                style={{
                  padding: "12px",
                  backgroundColor: "#142038",
                  borderRadius: "0 18px 8px 0",
                }}
              >
                {candidate.voteCount}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default Connected;
