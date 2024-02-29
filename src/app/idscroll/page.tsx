'use client';
import React from 'react';

const page = () => {
  /**
   * 引数で受けっとったidのセクションの位置より150px上にスクロールする
   */
  const scrollToValid = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className="text-2xl">ID Scroll</h1>
      <div className="flex flex-col gap-3 mt-2">
        <section
          id="section1"
          className="h-[500px] border flex justify-center items-center text-2xl"
        >
          section1
        </section>
        <section
          id="section2"
          className="h-[500px] border flex justify-center items-center text-2xl"
        >
          section2
        </section>
        <section
          id="section3"
          className="h-[500px] border flex justify-center items-center text-2xl"
        >
          section3
        </section>
        <section
          id="section4"
          className="h-[500px] border flex justify-center items-center text-2xl"
        >
          section4
        </section>
        <section
          id="section5"
          className="h-[500px] border flex justify-center items-center text-2xl"
        >
          section5
        </section>
      </div>
      <div className="flex justify-center gap-3 mt-[300px]">
        <button
          className="border p-2"
          onClick={() => scrollToValid('section1')}
        >
          section1
        </button>
        <button
          className="border p-2"
          onClick={() => scrollToValid('section2')}
        >
          section2
        </button>
        <button
          className="border p-2"
          onClick={() => scrollToValid('section3')}
        >
          section3
        </button>
        <button
          className="border p-2"
          onClick={() => scrollToValid('section4')}
        >
          section4
        </button>
        <button
          className="border p-2"
          onClick={() => scrollToValid('section5')}
        >
          section5
        </button>
      </div>
    </div>
  );
};

export default page;
