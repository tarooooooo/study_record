import { RiHomeSmileFill, RiTimer2Fill } from "react-icons/ri"
import { HiUserGroup } from "react-icons/hi"
import { memo, FC } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

export const HeaderComponents: FC = memo(() => {
  return (
    <SHeader className={'site-header'}>
      <div className={'site-header__wrapper'}>
        <div className={'site-header__start'}>
          <a href="#" className={'brand'}>StudyRecord</a>
        </div>
        <div className={'site-header__middle'}>
          <nav className={'nav'}>
            <button className={'nav__toggle'} aria-expanded="false" type="button">
              menu
            </button>
            <ul className={'nav__wrapper'}>
              <li className={'nav__item active'}>
                <Link to="/home">
                <RiHomeSmileFill/>
                  <span>HOME</span>
                </Link>
              </li>
              <li className={'nav__item'}>
                <Link to="/home/users">
                 <HiUserGroup />
                  <span>Users</span>
                </Link>
              </li>
              <li className={'nav__item'}>
                <Link to="/home/learning_goals">
                  <RiTimer2Fill />
                  <span>LearningGoals</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </SHeader>
  )
});

const SHeader = styled.header`
  position: relative;
  background-color: #f7e93f;
  .site-header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; 
    .site-header__start{
      .brand{
        font-weight: bold;
        font-size: 25px;
        padding-left: 20px;
        color: #006dee;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 940px) {
    .site-header__wrapper {
      padding-top: 0;
      padding-bottom: 0; 
    } 
  }
  .site-header__middle {
    flex: 1;
    .nav {
      margin-left: 1rem;
      margin-right: 1rem; 
      .nav__toggle {
        position: absolute;
        right: 1rem;
        top: 1rem; 
        @media (min-width: 940px) {
          display: none; 
        }
      }
      .nav__item {
        list-style-type: none;
        a {
          color: #006dee;
          text-decoration: none;
          display: block;
          padding: 1rem 1.25rem;
          border-left: 4px solid transparent; 
          @media (min-width: 940px) {
            text-align: center;
            border-left: 1px solid #222;
            border-bottom: 4px solid transparent; 
          }
        }
        svg {
          display: inline-block;
          vertical-align: middle;
          width: 22px;
          height: 22px;
          margin-right: 1rem;
          color: #006dee;
        
          @media (min-width: 940px) {
            display: block;
            margin: 0 auto 0.5rem;
          }
        }
        .nav__item.active {
          a {
            border-left-color: #222;
            @media (min-width: 940px) {
                border-bottom-color: #222; 
            }
          }
        }
        @media (min-width: 940px) {
          .nav__toggle {
            display: none; 
          } 
        }
      }
    }
    @media (min-width: 940px) {
      .nav__wrapper {
        display: flex;
        margin: 0;
        justify-content: center; 
      }
    }
    @media (max-width: 939px) {
      .nav__wrapper {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        z-index: -1;
        background-color: #d9f0f7;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-100%);
        transition: transform 0.3s ease-out, opacity 0.3s ease-out; }
        .nav__wrapper.active {
          visibility: visible;
          opacity: 1;
          transform: translateY(0); 
        } 
      }

    @media (min-width: 940px) {
      .nav__item:last-child a {
        border-right: 1px solid #222; 
      } 
    }

    @media (min-width: 1100px) {
      .nav__item {
        min-width: 140px;
        flex: 1; 
      } 
    }
  }   
`