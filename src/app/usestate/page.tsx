"use client";
import Link from "next/link";
import React, { useState } from "react";

// ユーザーIDをキーとしてテキストを保存するオブジェクトの型定義
interface TypingTexts {
  [userId: string]: string;
}

export default function Page() {
  // typingTextsとselectedUserIdのstateを定義
  const [typingTexts, setTypingTexts] = useState<TypingTexts>({});
  const [selectedUserId, setSelectedUserId] = useState("1");

  // ユーザーが変更されたときのハンドラー
  const handleUserChange = (selectedUserId: string) => {
    // 選択されたユーザーのテキストが存在するかチェック
    if (!(selectedUserId in typingTexts)) {
      // 存在しない場合、新たにユーザーを追加
      setTypingTexts({ ...typingTexts, [selectedUserId]: "" });
    }
    // 選択されたユーザーIDを更新
    setSelectedUserId(selectedUserId);
  };

  // テキストが変更されたときのハンドラー
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    // 選択されたユーザーのテキストを更新
    setTypingTexts((prevState) => ({ ...prevState, [selectedUserId!]: text }));
  };

  // レンダリング部分
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">useState</h1>
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex">
          <button
            onClick={() => handleUserChange("1")}
            className="p-5 border w-20"
          >
            <p>Test1</p>
          </button>
          <button
            onClick={() => handleUserChange("2")}
            className="p-5 border w-20"
          >
            <p>Test2</p>
          </button>
        </div>
        <input
          name="message"
          className="border rounded-sm text-black"
          value={typingTexts[selectedUserId!] || ""}
          onChange={handleTextChange}
        />
        <button className="bg-slate-200 text-black rounded-sm py-2">
          送信
        </button>
        {selectedUserId in typingTexts && (
          <p>
            {selectedUserId}:{typingTexts[selectedUserId]}
          </p>
        )}
      </div>
      <Link href="/" className="border-b-2">
        Home
      </Link>
    </div>
  );
}
