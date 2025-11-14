'use client';
import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSendEmail = async () => {
        try {
            setLoading(true);
            setStatus('idle');
            const res = await fetch('/api/emails', { method: 'POST' });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 transition-all hover:shadow-xl">
                <h1 className="text-3xl font-semibold mb-4 tracking-tight text-black">
                    ✉️ Test Email Automation
                </h1>
                <p className="text-gray-500 mb-8">
                    Click below to send a test email and verify your setup works fine.
                </p>

                <button
                    onClick={handleSendEmail}
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-white font-medium text-lg transition-all duration-200 shadow-sm ${
                        loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-black hover:bg-gray-800 active:scale-95'
                    }`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </span>
                    ) : (
                        'Send Test Email'
                    )}
                </button>

                {status === 'success' && (
                    <p className="mt-6 text-green-600 font-medium animate-fade-in">
                        ✅ Email sent successfully!
                    </p>
                )}
                {status === 'error' && (
                    <p className="mt-6 text-red-500 font-medium animate-fade-in">
                        ❌ Something went wrong. Check console or server logs.
                    </p>
                )}
            </div>

            <footer className="mt-12 text-sm text-gray-400">
                Built with Next.js · Styled with TailwindCSS
            </footer>
        </main>
    );
}
