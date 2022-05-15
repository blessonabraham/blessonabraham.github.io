import { useEffect, useState } from 'react';
import { LinkedinSVG, GithubSVG, TwitterSVG, MailSVG, DownloadSVG } from './SharedIcons';
import { MainContent } from './types';

export const description = "Proficient in React, Angular, Nodejs, Springboot, and CI/CD techniques for multi-tier architecture development. Ability to quickly adapt to new frameworks and languages, as well as experience in developing and managing cloud applications. Looking forward to playing a vital role in achieving organizational goals in a challenging environment and, learning new skills along the way."

function App() {

  const [mainContent, setMainContent] = useState<MainContent>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/blessonabraham/blessonabraham.github.io/master/tsconfig.json')
      console.log(await response.text())
    }
    getData()
  }, [])


  return (
    <div className='flex flex-col items-center bg-white h-max'>

      <div className='mt-20 w-10/12 mb-16'>

        <div className='text-6xl text-gray-600 font-bold'>Blesson Abraham</div>
        <div className='text-2xl text-gray-500 font-bold'>Full Stack Engineer | Google Cloud Certified</div>

        <div className='flex mt-8 gap-4'>

          <a className='fill-gray-400 w-5' href='https://www.linkedin.com/in/blessonabraham95/'>
            <LinkedinSVG />
          </a>

          <a className='fill-gray-400 w-5' href='https://www.linkedin.com/in/blessonabraham95/'>
            <GithubSVG />
          </a>

          <a className='fill-gray-400 w-5' href='https://www.linkedin.com/in/blessonabraham95/'>
            <TwitterSVG />
          </a>

          <a className='fill-gray-400 w-5' href='https://www.linkedin.com/in/blessonabraham95/'>
            <MailSVG />
          </a>

          <a className='fill-gray-400 w-5' href='https://www.linkedin.com/in/blessonabraham95/'>
            <DownloadSVG />
          </a>

        </div>

        <div className='text-gray-600 mt-8'>
          {description}
        </div>

        <div className='text-2xl mt-10 text-gray-700 font-bold'>Public Content</div>

        <div className='mt-5 flex flex-row flex-wrap gap-5 justify-between '>

          {[...Array(10)].map(() => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Building Micro Frontend with React & Module Federation</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Article</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dev.to</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Jun 10</span>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;
