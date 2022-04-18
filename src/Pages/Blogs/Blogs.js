import React from 'react'

export default function Blogs() {
    return (
        <div className='md:p-24 md:px-64 text-center md:text-left p-4 space-y-4'>

            <div className="q1">
                <p className="text-orange-400">Difference between authorization and authentication?</p>
                <div className="text-white">
                    <p>Authentication is related to the user.it lets the system or application know if the user is verified in that particular system or application whereas Authorization defines if the user has any access to any data or files or anything in that system or application. In simple terms authorization is to know whether the user has access to any privet data in an application and authentication is to know about the user. like what is the user's name user's email and other Credentials of the user.</p>
                </div>
            </div>
            <div className="q2">
                <p className="text-orange-400">Why are you using firebase? What other options do you have to implement authentication?</p>
                <div className="text-white">
                    <p>As an individual developer, you can use firebase.it has better community support and 3rd party library which makes authentication easier to implement. as I mentioned it is useful for an individual developer. but for startups, there are alternatives for firebase. The most popular is auth0 which is the go-to user authentication platform and a Firebase alternative. there are
                        <span className="text-cyan-400"> Amazon Cognito, Authress, Frontegg, Keycloak, PingIdentity, Okta, Supabase, </span> etc.who are also good choices.
                    </p>
                </div>
            </div>
            <div className="q1">
                <p className="text-orange-400">What other services does firebase provide other than authentication</p>
                <div className="text-white">
                    <p>Authentication is a service provided by firebase but firebase also provides a real-time database, machine learning, cloud Functions, hosting, storage, and cloud firestore. we can consider firebase as our complete backend solution.
                    </p>
                </div>
            </div>

        </div>
    )
}
