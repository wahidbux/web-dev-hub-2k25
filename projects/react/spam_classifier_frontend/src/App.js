import React, { useState } from "react";
import {
  Shield,
  Mail,
  AlertTriangle,
  CheckCircle,
  Lock,
  Scan,
} from "lucide-react";
import "./App.css";

function App() {
  const [emailText, setEmailText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: emailText }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the API call.");
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="background-grid"></div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <div className="shield-container">
            <div className="shield-wrapper">
              <Shield className="shield-icon" />
              <div className="shield-glow"></div>
            </div>
          </div>
          <h1 className="main-title">Email Threat Analyzer</h1>
          <p className="subtitle">
            <Lock className="lock-icon" />
            Advanced Spam Detection System
          </p>
        </div>

        {/* Main Card */}
        <div className="main-card">
          <div className="card-header">
            <div className="card-header-content">
              <Mail className="mail-icon" />
              <h2 className="card-title">Email Content Analysis</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label className="form-label">
                Paste Email Content for Analysis
              </label>
              <textarea
                rows="10"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="Enter or paste the email content here for threat analysis..."
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`submit-button ${isLoading ? "disabled" : ""}`}
            >
              {isLoading ? (
                <>
                  <Scan className="button-icon spinning" />
                  Analyzing Threat Patterns...
                </>
              ) : (
                <>
                  <Shield className="button-icon" />
                  Initiate Scan
                </>
              )}
            </button>
          </form>

          {/* Results Section */}
          {prediction && (
            <div className="results-container">
              <div
                className={`result-card ${
                  prediction === "Spam" ? "spam-result" : "safe-result"
                }`}
              >
                <div className="result-content">
                  {prediction === "Spam" ? (
                    <div className="icon-wrapper">
                      <AlertTriangle className="result-icon threat-icon" />
                      <div className="icon-glow threat-glow"></div>
                    </div>
                  ) : (
                    <div className="icon-wrapper">
                      <CheckCircle className="result-icon safe-icon" />
                      <div className="icon-glow safe-glow"></div>
                    </div>
                  )}
                  <div className="result-text">
                    <p className="result-label">Analysis Result</p>
                    <h3
                      className={`result-title ${
                        prediction === "Spam" ? "threat-text" : "safe-text"
                      }`}
                    >
                      {prediction === "Spam"
                        ? "⚠️ THREAT DETECTED"
                        : "✓ LEGITIMATE EMAIL"}
                    </h3>
                    <p className="result-description">
                      {prediction === "Spam"
                        ? "This email exhibits spam characteristics and should be treated with caution."
                        : "This email appears to be legitimate and safe."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Section */}
          {error && (
            <div className="error-container">
              <div className="error-card">
                <AlertTriangle className="error-icon" />
                <div className="error-text">
                  <p className="error-title">System Error</p>
                  <p className="error-description">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
            <Shield className="footer-icon" />
            Powered by Advanced Machine Learning • Cybersecurity Grade
            Protection
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
