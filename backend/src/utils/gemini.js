import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log(
    "Gemini key loaded:",
    process.env.GEMINI_API_KEY?.slice(0, 8)
);

export const generateSummary = async (text) => {
    const model = genAI.getGenerativeModel({
        model: "models/gemini-2.5-flash"
    });

    const prompt = `
Summarize the following note in 3-4 short points.
Use a numbered list format (1., 2., 3., etc.).
Do not use asterisks or dashes.

NOTE:
${text}
`;

    const result = await model.generateContent(prompt);
    return result.response.text();
};
