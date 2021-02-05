import React from 'react'
import JoinFree from './JoinFree'
import Goals from './Goals'
import Flegship from './Flegship'
import NextStep from './NextStep'
import Header from './Header'
import FreeCourses from './FreeCourse'
import Footer from './Footer'
import Test from './Test'

const Home = () => {
    return(
        <div>
            <Header></Header>
            <JoinFree></JoinFree><br></br>
            <Goals></Goals>
            <Flegship></Flegship>
            <FreeCourses></FreeCourses>
            <NextStep></NextStep>
            <Footer></Footer>
            {/* <Test></Test> */}
          
        </div>
    )
}

export default Home;