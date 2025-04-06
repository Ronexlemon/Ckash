import { NextResponse } from "next/server";
import { google } from "googleapis";
import { googleCredentials } from "./credentials";

export async function POST(request: Request) {
  console.log("Request received at /api/waitlist");

  try {
    const { email } = await request.json();
    const auth = new google.auth.GoogleAuth({
      credentials: googleCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const range = "Sheet1!A2";

    // Write rows to spreadsheet
    await sheets?.spreadsheets?.values?.append({
      spreadsheetId: "1jEekpunk0uAt91D3ZPTknbN9d02DSSDKLv-9D73pMmk"!,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json({ message: "Email saved successfully" });
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
