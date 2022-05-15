import { useEffect, useState } from 'react';
import { LinkedinSVG, GithubSVG, TwitterSVG, MailSVG, DownloadSVG } from './SharedIcons';
import { MainContent } from './types';

function App() {

  const [mainContent, setMainContent] = useState<MainContent>()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/blessonabraham/blessonabraham.github.io/master/src/mainContent.json')
      const data = await response.json()
      setMainContent(data)
      document.title = data?.mainTitle + ' - ' + data?.subTitle
    }
    getData()
  }, [])


  return (
    <div className='flex flex-col items-center bg-white h-max'>

      <div className='mt-20 w-10/12 mb-16'>

        <div className='text-6xl text-gray-600 font-bold'>{mainContent?.mainTitle}</div>
        <div className='text-2xl text-gray-500 font-bold'>{mainContent?.subTitle}</div>

        <div className='flex mt-8 gap-4'>

          {mainContent?.socialLinks?.linkedin &&
            <a target="_blank" className='fill-gray-400 hover:fill-gray-700 w-5' href={mainContent?.socialLinks?.linkedin}>
              <LinkedinSVG />
            </a>
          }
          {mainContent?.socialLinks?.github &&
            <a target="_blank" className='fill-gray-400 hover:fill-gray-700 w-5' href={mainContent?.socialLinks?.github}>
              <GithubSVG />
            </a>
          }
          {mainContent?.socialLinks?.twitter &&
            <a target="_blank" className='fill-gray-400 hover:fill-gray-700 w-5' href={mainContent?.socialLinks?.twitter}>
              <TwitterSVG />
            </a>
          }
          {mainContent?.socialLinks?.mailid &&
            <a target="_blank" className='fill-gray-400 hover:fill-gray-700 w-5' href={mainContent?.socialLinks?.mailid}>
              <MailSVG />
            </a>
          }
          {mainContent?.socialLinks?.download &&
            <a target="_blank" className='fill-gray-400 hover:fill-gray-700 w-5' href={mainContent?.socialLinks?.download}>
              <DownloadSVG />
            </a>
          }

        </div>

        <div className='text-gray-600 mt-8'>
          {mainContent?.description}
        </div>

        <div className='text-2xl mt-10 text-gray-700 font-bold'>{mainContent?.subSectionTitle}</div>

        <div className='mt-5 flex flex-row flex-wrap gap-5 justify-between '>

          {mainContent?.subSectionContent?.map((content) => (
            <a target="_blank" href={content?.url}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{content.title}</div>
                  <p className="text-gray-700 text-base">{content.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {content?.tags?.map((tag) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>)}
                </div>
              </div>
            </a>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;
