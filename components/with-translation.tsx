"use client";

import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

// 创建一个客户端组件包装器，用于处理翻译
export function WithTranslation(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const translationProps = useTranslation();
    return <Component {...props} {...translationProps} />;
  };
}