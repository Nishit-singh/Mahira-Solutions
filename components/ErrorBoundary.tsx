import React, { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
    children?: ReactNode;
}

function ErrorFallback() {
    return (
        <div className="min-h-screen bg-white dark:bg-deep-charcoal flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl">error</span>
                </div>
                <h1 className="text-3xl font-black text-deep-charcoal dark:text-white uppercase tracking-tighter">Something went wrong</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    We're sorry, but there was an error displaying this page. Our team has been notified.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <button
                        onClick={() => {
                            window.location.href = '/'; // Hard reload to clear component states
                        }}
                        className="bg-primary text-white font-black py-3 px-8 rounded-full flex items-center gap-2 hover:brightness-110 transition-all text-xs uppercase tracking-widest"
                    >
                        <span className="material-symbols-outlined text-sm">home</span> Return Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
    return (
        <ReactErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ReactErrorBoundary>
    );
}
