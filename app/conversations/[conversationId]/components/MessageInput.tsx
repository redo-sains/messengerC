"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface MessageInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    required?: boolean;
    placeholder?: string;
    type?: string;
}

const MessageInput : React.FC<MessageInputProps> = ({errors ,id ,register ,placeholder ,required ,type}) => {
    return (
        <div className="relative w-full">
            <input 
                id={id} 
                type={type}
                autoComplete={id}
                { ...register(id, {required: required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-2
                    px-4
                    bg-neutral-100
                    w-full
                    rounded-full
                    focus:outline-none
                "
            />
        </div>
    );
}
 
export default MessageInput;