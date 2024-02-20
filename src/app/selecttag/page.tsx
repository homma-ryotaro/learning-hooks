'use client';
import React, { useState } from 'react';

type TagType = {
  id: number;
  value: string;
  selected: boolean;
};

const Page = () => {
  // 選択されたタグを管理するための状態です。
  const [selectTags, setSelectTags] = useState<TagType[]>([]);
  // タグの初期状態を設定します。各タグは名前と選択状態を持ちます。
  const [tags, setTags] = useState<TagType[]>([
    { id: 1, value: 'tag1', selected: false },
    { id: 2, value: 'tag2', selected: false },
    { id: 3, value: 'tag3', selected: false },
    { id: 4, value: 'tag4', selected: false },
  ]);
  // その他タグの初期状態を設定します。各タグは名前と選択状態を持ちます。
  const [otherTags, setOtherTags] = useState<TagType[]>([
    { id: 101, value: '', selected: false },
    { id: 102, value: '', selected: false },
    { id: 103, value: '', selected: false },
  ]);

  /**
   * タグをクリックした時の処理
   * クリックしたタグのselectedを反転させる
   * クリックしたタグがselectTagになければ追加する
   * @param index クリックしたタグのid
   */
  const clickTag = (tag: TagType) => {
    // タグの配列をコピーして新しい配列を作成します。
    const newTags = [...tags];
    // クリックしたタグの選択状態を反転します。
    tag.selected = !tag.selected;

    // クリックしたタグが既に選択されている場合は、選択タグから削除します。
    if (selectTags.some((selectTag) => selectTag.id === tag.id)) {
      setSelectTags(selectTags.filter((selectTag) => selectTag.id !== tag.id));
    } else {
      // クリックしたタグが選択されていない場合は、選択タグに追加します。
      setSelectTags([...selectTags, tag]);
    }
    // タグの状態を更新します。
    setTags(newTags);
  };

  /**
   * その他タグボタンをクリックした時の処理
   */
  const clickOtherTag = (tag: TagType) => {
    // その他タグが既に選択されている場合かチェックする
    const index = selectTags.findIndex((selectTag) => selectTag.id === tag.id);

    // その他タグが既に選択されている場合は、選択タグから削除します。
    if (index !== -1) {
      setSelectTags(selectTags.filter((selectTag) => selectTag.id !== tag.id));
      setOtherTags(otherTags.filter((otherTag) => otherTag.id !== tag.id));
    } else {
      // その他タグが選択されていない場合は、選択タグに追加します。
      setSelectTags([...selectTags, tag]);
      setOtherTags([...otherTags, tag]);
    }
  };

  /**
   * その他タグのテキストボックスに入力した時の処理
   */
  const inputOtherTag = (id: number, value: string) => {
    // その他タグの配列をコピーして新しい配列を作成します。
    const newOtherTags = [...otherTags, { id, value, selected: true }];
    // その他タグの状態を更新します。
    if (otherTags.includes(newOtherTags[newOtherTags.length - 1])) {
      setOtherTags(newOtherTags);
    }
    // 選択タグにidが一致するタグがあれば、そのタグのvalueを更新します。
    const newSelectTag = [...selectTags];
    const index = selectTags.findIndex((tag) => tag.id === id);
    if (index !== -1) {
      newSelectTag[index].value = value;
      setSelectTags(newSelectTag);
      return;
    }
  };

  return (
    <>
      <div className="container flex items-center flex-col gap-5">
        <ul className="flex gap-4">
          {tags.map((tag) => (
            <li key={tag.value}>
              <button
                onClick={() => clickTag(tag)}
                className={` text-black px-4 py-2 rounded-md disabled:bg-slate-500 ${
                  tag.selected ? 'bg-red-500' : 'bg-white'
                }`}
                disabled={selectTags.length >= 3 && !tag.selected}
              >
                {tag.value}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-md disabled:bg-gray-500"
            onClick={() =>
              clickOtherTag({ id: 101, value: '', selected: true })
            }
            disabled={
              selectTags.length === 3 &&
              !selectTags.some((tag) => tag.id === 101)
            }
          >
            その他タグ1追加
          </button>
          {selectTags.some((tag) => tag.id === 101) && (
            <input
              type="text"
              onChange={(e) => {
                inputOtherTag(101, e.target.value);
              }}
              className={`text-black rounded-md px-2 ${
                selectTags.some(
                  (tag) => tag.selected === true && tag.id === 101
                )
                  ? 'bg-red-500'
                  : 'bg-white'
              }`}
            />
          )}
        </div>
        {
          // その他タグ1が選択されている場合または、その他タグ2が選択されている場合は、その他タグ2を表示します。
          // selectTagが3つ以上選択されている場合は、その他タグ2を表示しません。
          (selectTags.some((tag) => tag.id === 101) ||
            selectTags.some((tag) => tag.id === 102)) &&
            (selectTags.length < 3 ||
              selectTags.some((tag) => tag.id === 102)) && (
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-white text-black px-4 py-2 rounded-md disabled:bg-gray-500"
                  onClick={() =>
                    clickOtherTag({ id: 102, value: '', selected: true })
                  }
                  disabled={
                    selectTags.length === 3 &&
                    !selectTags.some((tag) => tag.id === 102)
                  }
                >
                  その他タグ2追加
                </button>
                {selectTags.some((tag) => tag.id === 102) && (
                  <input
                    type="text"
                    onChange={(e) => {
                      inputOtherTag(102, e.target.value);
                    }}
                    className={`text-black rounded-md px-2 ${
                      selectTags.some(
                        (tag) => tag.selected === true && tag.id === 102
                      )
                        ? 'bg-red-500'
                        : 'bg-white'
                    }`}
                  />
                )}
              </div>
            )
        }
        {
          // その他タグ2が選択されている場合または、その他タグ3が選択されている場合は、その他タグ3を表示します。
          (selectTags.some((tag) => tag.id === 102) ||
            selectTags.some((tag) => tag.id === 103)) &&
            (selectTags.length < 3 ||
              selectTags.some((tag) => tag.id === 103)) && (
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-white text-black px-4 py-2 rounded-md disabled:bg-gray-500"
                  onClick={() =>
                    clickOtherTag({ id: 103, value: '', selected: true })
                  }
                  disabled={
                    selectTags.length === 3 &&
                    !selectTags.some((tag) => tag.id === 103)
                  }
                >
                  その他タグ3追加
                </button>
                {selectTags.some((tag) => tag.id === 103) && (
                  <input
                    type="text"
                    onChange={(e) => {
                      inputOtherTag(103, e.target.value);
                    }}
                    className={`text-black rounded-md px-2 ${
                      selectTags.some(
                        (tag) => tag.selected === true && tag.id === 103
                      )
                        ? 'bg-red-500'
                        : 'bg-white'
                    }`}
                  />
                )}
              </div>
            )
        }
        <h2>選択タグ</h2>
        <ul>
          {selectTags.map((tag) => (
            <li key={tag.id}>
              <p>{tag.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
