import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

export default function RunFirstAnalysisEmail() {
    return (
        <Html>
            <Head />
            <Preview>Run Your First Analysis and See Insights Instantly</Preview>
            <Body style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif", color: "#212121", margin: 0, padding: 0 }}>
                <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
                    {/* Header */}
                    <Img src="/Banner-1.jpg" alt="Cat" width="600" height="75" />;
                    <Section>
                        <Img
                            src="/Banner-1.jpg"
                            width="150"
                            alt="PredictEasy Logo"
                            style={{ display: "block", margin: "0 auto" }}
                        />

                        <Section style={{ backgroundColor: "#fff", textAlign: "center", padding: "20px 0" }}>
                            <img
                                src="/PE%20logo%20Color.svg"
                                width="150"
                                alt="PredictEasy Logo"
                                style={{ display: "block", margin: "0 auto" }}
                            />
                        </Section>

                    </Section>

                    {/* Hero Section */}
                    <Section style={{ padding: "40px 32px", textAlign: "center" }}>
                        <Heading
                            style={{
                                fontSize: "28px",
                                fontWeight: "bold",
                                lineHeight: "1.3",
                                marginBottom: "8px",
                            }}
                        >
                            Run Your First{" "}
                            <span
                                style={{
                                    backgroundImage: "linear-gradient(to right, #EB3880, #8683CC, #6AC1FA)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    fontSize: "48px",
                                    fontWeight: 800,
                                    display: "block",
                                    marginTop: "10px",
                                }}
                            >
                Analysis
              </span>
                        </Heading>

                        <Text style={{ fontSize: "18px", color: "#555555", marginBottom: "24px" }}>
                            See Insight Instantly.
                        </Text>

                        {/* Greeting */}
                        <Text style={{ textAlign: "left", fontSize: "15px", color: "#333333", marginBottom: "16px" }}>
                            Hi Aldrin,
                        </Text>

                        <Text style={{ textAlign: "left", fontSize: "15px", color: "#333333", lineHeight: "24px", marginBottom: "24px" }}>
                            You signed up yesterday but haven’t run your first analysis yet.
                            Let’s fix that — your dashboard is waiting to show you{" "}
                            <span style={{ fontStyle: "italic", fontWeight: 500 }}>real insights from your data.</span>
                        </Text>

                        <Text style={{ textAlign: "left", fontSize: "15px", color: "#333333", marginBottom: "24px" }}>
                            Upload a dataset and see your predictions appear in seconds.
                        </Text>

                        {/* Button */}
                        <Section style={{ textAlign: "center", marginBottom: "32px" }}>
                            <Button
                                href="https://predicteasy.ai/start-analysis"
                                style={{
                                    background: "linear-gradient(to right, #6D4AFF, #614CF9)",
                                    color: "#ffffff",
                                    padding: "12px 40px",
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textDecoration: "none",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                }}
                            >
                                Run My First Analysis
                            </Button>
                        </Section>

                        <Text style={{ fontSize: "14px", color: "#555555", lineHeight: "22px", marginBottom: "32px" }}>
                            The sooner you start, the faster you’ll discover trends and outcomes others can’t see.
                        </Text>

                        <Text style={{ fontSize: "15px", color: "#333333", fontWeight: 600 }}>
                            See you inside, <br />
                            The PredictEasy Team
                        </Text>
                    </Section>

                    <Hr style={{ borderColor: "#E0E0E0", margin: "24px 0" }} />

                    {/* Footer */}
                    <Section style={{ textAlign: "center", paddingBottom: "40px" }}>
                        {/* Social Links */}
                        <Section style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "16px" }}>
                            <Link href="https://linkedin.com/company/predicteasy">
                                <Img
                                    src="https://yourdomain.com/linkedin.png"
                                    width="22"
                                    height="22"
                                    alt="LinkedIn"
                                    style={{ display: "inline-block" }}
                                />
                            </Link>
                            <Link href="https://x.com/predicteasy">
                                <Img
                                    src="https://yourdomain.com/x.png"
                                    width="22"
                                    height="22"
                                    alt="X"
                                    style={{ display: "inline-block" }}
                                />
                            </Link>
                            <Link href="https://youtube.com/@predicteasy">
                                <Img
                                    src="https://yourdomain.com/youtube.png"
                                    width="24"
                                    height="24"
                                    alt="YouTube"
                                    style={{ display: "inline-block" }}
                                />
                            </Link>
                        </Section>

                        <Text style={{ fontSize: "13px", color: "#666666", marginBottom: "4px" }}>
                            You’re getting this email because you just joined{" "}
                            <span style={{ fontWeight: 600 }}>PredictEasy</span>.{" "}
                            <span style={{ color: "#6D4AFF", fontWeight: 500 }}>Welcome aboard!</span>
                        </Text>

                        <Section
                            style={{
                                fontSize: "13px",
                                color: "#666666",
                                marginTop: "12px",
                                marginBottom: "16px",
                                display: "flex",
                                justifyContent: "center",
                                gap: "8px",
                            }}
                        >
                            <Link href="#" style={{ textDecoration: "underline", color: "#666666" }}>
                                Contact Support
                            </Link>
                            <Text>|</Text>
                            <Link href="#" style={{ textDecoration: "underline", color: "#666666" }}>
                                Privacy Policy
                            </Link>
                            <Text>|</Text>
                            <Link href="#" style={{ textDecoration: "underline", color: "#666666" }}>
                                Unsubscribe
                            </Link>
                        </Section>

                        <Img
                            src="https://yourdomain.com/logo-small.png"
                            width="100"
                            alt="PredictEasy"
                            style={{ display: "block", margin: "0 auto 8px auto" }}
                        />
                        <Text style={{ fontSize: "12px", color: "#999999" }}>
                            PredictEasy © All rights reserved. 2025
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
