/* @flow */

import * as React from 'react';
import { css, styles, include } from 'linaria';

import showcaseData from './showcaseData';

export default class Showcase extends React.Component<{}> {
  render() {
    return (
      <div {...styles(container)}>
        <div {...styles(content)}>
          <h1>Showcase</h1>
          <p>
            {`Here a some examples of real applications that are built using React
          Native Paper. Do you want to share yours? `}
            <a
              href="https://github.com/callstack/react-native-paper/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Just send us a PR!
            </a>
          </p>
        </div>
        <div {...styles(gallery)}>
          {showcaseData.map(data => (
            <div key={data.image}>
              <h3 {...styles(appName)}>{data.name}</h3>
              <img src={data.image} alt="" />
              <div {...styles(badgeContainer)}>
                <a
                  href={data.android || null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={!data.android ? disabledBadge : undefined}
                    src="images/google-play-badge.png"
                    alt=""
                  />
                </a>
                <a
                  href={data.ios || null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={!data.ios ? disabledBadge : undefined}
                    src="images/app-store-badge.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const container = css`
  padding: 24px 0;
  width: 100%;
  overflow-y: auto;
`;

const content = css`
  padding: 0 48px;
  @media (max-width: 680px) {
    padding: 0 16px;
  }
`;

const elevated = css`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const appName = css`
  @media (min-width: 680px) {
    margin: 0 10px;
  }
`;

const gallery = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px 38px;
  @media (max-width: 680px) {
    justify-content: center;
    padding: 12px 16px;
  }
  min-width: 0;

  > div > img {
    ${include(elevated)};
    display: block;
    max-height: 640px;
    width: auto;
    @media (min-width: 680px) {
      margin: 10px;
    }
  }
`;

const badgeContainer = css`
  @media (min-width: 680px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  height: 50px;
  margin: 0 0 48px 0;
  > a,
  img {
    height: 50px;
    width: auto;
  }
  > a {
    margin: 10px;
    @media (max-width: 680px) {
      display: block;
      margin: 10px 0;
    }
  }
`;

const disabledBadge = css`
  opacity: 0.4;
`;
