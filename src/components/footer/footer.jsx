import React from 'react'
import footimg from "../../img/footer.png"
import footer from "../footer/footer.module.scss"
export const Footer = () => {
  return (
   
    <div className={footer.box}>
      
      <img src={footimg} alt="asd" />
      <ul className={footer.list}>
        <li><a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a></li>
        <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privasy</a></li>
        <li><a href="https://github.com/security">security</a></li>
        <li><a href="https://www.githubstatus.com/">Status</a></li>
        <li><a href="https://docs.github.com/en">Docs</a></li>
        <li><a href="https://support.github.com/?tags=dotcom-footer">Contact Github</a></li>
        <li><a href="https://github.com/pricing">Pricing</a>
        </li>
        <li><a href="https://docs.github.com/en">Api</a></li>
        <li><a href="https://github.com/services/">Training</a></li>
        <li><a href="https://github.blog/">Blog</a></li>
        <li><a href="https://github.com/about">About</a></li>
      </ul>
    </div>
    
  )
}
