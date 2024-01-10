import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  const { token } = await request.json();
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${token}`
    );

    return NextResponse.json({ success: response.data.success });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error verifying reCaptcha', success: false },
      { status: 500 }
    );
  }
}
