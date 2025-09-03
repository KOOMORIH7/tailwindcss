import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>Nisshocode</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>home</a>
          <a href="#abut" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>
    <section className='text-gray-700 id="home"'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
          MY Portfolio webSite</h1>
          <p className='mb-8 leading-relaxed'>現在、webエンジニアとしてデビューしたてのほやほやです。特異な言語はHTML,CSS,JaveScript,TypeScript,PHP,SQL,Reactなどweb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-gray-600 duration-300'>Contact Me</button>
      </div>
      <div className='md:w-1/2 lg:max-w-lg w-5/6'>
        <img src="\img\myPicture.png" alt="" />
      </div>
      </div>
    </section>
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>これまで、マーケティング業界に数年前無分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。</p>
          <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。また、PYthonを使ってAIによる株価の予測サイトを構築しました。また数件の事業所のWebサイトのこういくなど多岐にわたります。</p>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 3H8.5V6H5.5V3Z" fill="currentColor" />
                    <path d="M5.5 8H8.5V11H5.5V8Z" fill="currentColor" />
                    <path d="M5.5 13V16H8.5V13H5.5Z" fill="currentColor" />
                    <path d="M10.5 3H13.5V6H10.5V3Z" fill="currentColor" />
                    <path d="M10.5 8V11H13.5V8H10.5Z" fill="currentColor" />
                    <path d="M10.5 13H13.5V16H10.5V13Z" fill="currentColor" />
                    <path d="M10.5 18V21H13.5V18H10.5Z" fill="currentColor" />
                    <path d="M15.5 3H18.5V6H15.5V3Z" fill="currentColor" />
                    <path d="M15.5 8V11H18.5V8H15.5Z" fill="currentColor" />
                    <path d="M15.5 13H18.5V16H15.5V13Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能つきのchatアプリ、仕様はReact、JavaScript、html、css、firebase、AWS、ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.45887 2L1 6.01478L2.33826 7.50107L6.79713 3.48629L5.45887 2Z"
                    fill="currentColor"
                  />
                  <path d="M11 8H13V12H16V14H11V8Z" fill="currentColor" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.5411 2L23 6.01478L21.6617 7.50107L17.2029 3.48629L18.5411 2Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>AI Finance</h2>
              </div>
              <div>
                <p>AIを使った株やビットコインのデータの取得、分析、一か月後の予測アプリです。AIはscikit leamの回帰で実装しています。主にpythonでコーディングを行い、フレームワークはStreamlitを使用しています。株や暗号通貨の売買にぜひお役立てください。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 6C15 7.30622 14.1652 8.41746 13 8.82929V16.874C14.7252 16.4299 16 14.8638 16 13H18C18 15.973 15.8377 18.441 13 18.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.917C8.16229 18.441 6 15.973 6 13H8C8 14.8638 9.27477 16.4299 11 16.874V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Site Dev</h2>
              </div>
              <div>
                <p>中小企業のWebサイト構築を数件受注しています。商社や税理事務所業界団体等多岐にわたります。それぞれの案件は、綿密にヒアリングを行い、クライアントが納得するまで修正を練り返します。自社サーバーを使用することで安価に抑えています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='mb-10 lg:md-0 w-full lg:w-1/2 flex justify-center'>
          <img src="\img\pc.jpg" alt="" className='rounded'/>
        </div>
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>MY Skills</h1>
          <div>
            <h2>HTML</h2>
              <div className='shadow bg-gray-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-gray-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-gray-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-gray-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"80%"}}>80%</div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
