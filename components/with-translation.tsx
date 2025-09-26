"use client";

import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

// 创建一个客户端组件包装器，用于处理翻译
export function WithTranslation<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: Omit<P, keyof ReturnType<typeof useTranslation>>) {
    const translationProps = useTranslation();
    return <Component {...props as P} {...translationProps} />;
  };
}