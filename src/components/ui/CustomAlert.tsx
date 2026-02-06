"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface CustomAlertProps {
    message: string;
    type: "success" | "error";
    onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    if (!isVisible) return null;

    const icon =
        type === "success" ? (
            <CheckCircle size={20} className="text-lime-300" />
        ) : (
            <AlertTriangle size={20} className="text-red-300" />
        );
    const bgColor =
        type === "success"
            ? "bg-lime-950/90 border-lime-600 shadow-lg shadow-lime-800/30"
            : "bg-red-950/90 border-red-600 shadow-lg shadow-red-800/30";

    return (
        <div
            className={`fixed top-4 right-4 p-4 rounded-xl z-50 flex items-center space-x-3 text-white backdrop-blur-sm transition-all duration-500 ease-in-out ${bgColor} transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
        >
            {icon}
            <p className="font-semibold text-sm">{message}</p>
        </div>
    );
};

export default CustomAlert;
