import './Form.scss';



export function Form() {
    return (
        <div className="container">
            <div className="headers">
                <h1 id="title" className="text-center">Courses Rank</h1>

                <p id="description" className="description text-center">
                Register your opinion about the Course
                </p>
            </div>

            <form id="survey-form">
                <div className="form-group">
                    <label id="name-label" for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label id="email-label" for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        required
                    />
                </div>
                <hr/>
                <div className="form-group">
                    <label id="name-label" for="course-name">Course</label>
                    <input
                        type="text"
                        name="course-name"
                        id="course-name"
                        className="form-control"
                        placeholder="Enter Course name-title"
                        required
                    />
            </div>

                <div className="form-group">
                    <label id="name-label" for="course-area">Course area</label>
                    <input
                        type="text"
                        name="course-area"
                        id="course-area"
                        className="form-control"
                        placeholder="Enter Course area-field"
                        required
                    />
                </div>

                <div className="form-group">
                    <label id="number-label" for="number">
                    Course Duration (months)<span className="clue">(optional)</span>
                    </label>
                    <input
                        type="number"
                        name="Course_Duration"
                        id="number"
                        min="10"
                        max="99"
                        className="form-control"
                        placeholder="Course Duration in months"
                    />
                </div>

                <div className="form-group">
                    <label id="name-label" for="institution-name">Institution - School</label>
                    <input
                        type="text"
                        name="institution-name"
                        id="institution-name"
                        className="form-control"
                        placeholder="Enter Institution School name"
                        required
                    />
                </div>

                <div className="form-group">
                    <p>Which option best describes your satisfaction?</p>
                    <select id="dropdown" name="role" className="form-control" required>
                    <option disabled selected value>Select one option</option>
                    <option value="student">Pretty satisfied</option>
                    <option value="job">Almost satisfied</option>
                    <option value="learner">Not enough</option>
                    <option value="preferNo">It was a waste of time and money</option>
                    <option value="other">It was a scam</option>
                    </select>
                </div>

                <div className="form-group">
                    <p>&larr;Would you recommend this course to a friend?&rarr;</p>
                    <label>
                    <input
                        name="user-recommend"
                        value="definitely"
                        type="radio"
                        className="input-radio"
                        checked
                    />Definitely</label>

                    <label>
                    <input
                        name="user-recommend"
                        value="maybe"
                        type="radio"
                        className="input-radio"
                    />Maybe</label>

                    <label>
                    <input
                        name="user-recommend"
                        value="not-sure"
                        type="radio"
                        className="input-radio"
                    />Not sure</label>

                    <label>
                    <input
                        name="user-recommend"
                        value="no-way"
                        type="radio"
                        className="input-radio"
                    />No way</label>
                </div>

                <div className="form-group">
                    <p>
                    &rarr;What is your opinion about the course planing and structure?&larr;
                    </p>
                    <select id="most-like" name="mostLike" className="form-control" required>
                    <option disabled selected value>Select an option</option>
                    <option value="perfect">Perfect</option>
                    <option value="good">Good</option>
                    <option value="average">Average</option>
                    <option value="Messy">Messy</option>
                    <option value="terrible">Terrible</option>
                    </select>
                </div>

                <div className="form-group">
                    <p>
                    &uarr;What would you consider the best features of this course?&uarr;<br/>
                    <span className="clue">(Check all that apply)</span>
                    </p>

                    <label>
                    <input
                        name="prefer"
                        value="real-life-projects"
                        type="checkbox"
                        className="input-checkbox"
                    />Real life projects</label>
                    <label>
                    <input
                        name="prefer"
                        value="mentorship"
                        type="checkbox"
                        className="input-checkbox"
                    />Mentorship</label>
                    <label>
                    <input
                        name="prefer"
                        value="good-teachers"
                        type="checkbox"
                        className="input-checkbox"
                    />Good Teachers</label>
                    <label>
                    <input
                        name="prefer"
                        value="research-material"
                        type="checkbox"
                        className="input-checkbox"
                    />Research Material</label>
                    <label>
                    <input
                        name="prefer"
                        value="networking"
                        type="checkbox"
                        className="input-checkbox"
                    />Networking</label>
                    <label>
                    <input
                        name="prefer"
                        value="costume-service"
                        type="checkbox"
                        className="input-checkbox"
                    />Costume-Service</label>
                    <label>
                    <input
                        name="prefer"
                        value="live-video-classes"
                        type="checkbox"
                        className="input-checkbox"
                    />Live video classes</label>
                    <label>
                    <input
                        name="prefer"
                        value="career-mentorship"
                        type="checkbox"
                        className="input-checkbox"
                    />Career Mentorship</label>
                    <label>
                    <input
                        name="prefer"
                        value="recorded-video-tutorials"
                        type="checkbox"
                        className="input-checkbox"
                    />Recorded video tutorials</label>
                    <label>
                    <input
                        name="prefer"
                        value="community"
                        type="checkbox"
                        className="input-checkbox"
                    />Community</label>
                    <label>
                    <input
                        name="prefer"
                        value="additional-courses"
                        type="checkbox"
                        className="input-checkbox"
                    />Additional Courses</label>
                </div>
                

                <div className="form-group">
                    <p>
                    &darr;What would you consider the downside features of this course?&darr;<br/>
                    <span className="clue">(Check all that apply)</span>
                    </p>

                    <label>
                    <input
                        name="prefer"
                        value="real-life-projects"
                        type="checkbox"
                        className="input-checkbox"
                    />Real life projects</label>
                    <label>
                    <input
                        name="prefer"
                        value="mentorship"
                        type="checkbox"
                        className="input-checkbox"
                    />Mentorship</label>
                    <label>
                    <input
                        name="prefer"
                        value="good-teachers"
                        type="checkbox"
                        className="input-checkbox"
                    />Good Teachers</label>
                    <label>
                    <input
                        name="prefer"
                        value="research-material"
                        type="checkbox"
                        className="input-checkbox"
                    />Research Material</label>
                    <label>
                    <input
                        name="prefer"
                        value="networking"
                        type="checkbox"
                        className="input-checkbox"
                    />Networking</label>
                    <label>
                    <input
                        name="prefer"
                        value="costume-service"
                        type="checkbox"
                        className="input-checkbox"
                    />Costume-Service</label>
                    <label>
                    <input
                        name="prefer"
                        value="live-video-classes"
                        type="checkbox"
                        className="input-checkbox"
                    />Live video classes</label>
                    <label>
                    <input
                        name="prefer"
                        value="career-mentorship"
                        type="checkbox"
                        className="input-checkbox"
                    />Career Mentorship</label>
                    <label>
                    <input
                        name="prefer"
                        value="recorded-video-tutorials"
                        type="checkbox"
                        className="input-checkbox"
                    />Recorded video tutorials</label>
                    <label>
                    <input
                        name="prefer"
                        value="community"
                        type="checkbox"
                        className="input-checkbox"
                    />Community</label>
                    <label>
                    <input
                        name="prefer"
                        value="additional-courses"
                        type="checkbox"
                        className="input-checkbox"
                    />Additional Courses</label>
                </div>

                <div className="form-group">
                    <p>Please, leave a note, comments about your experience on the course.</p>
                    <textarea
                        id="comments"
                        className="input-textarea"
                        name="comment"
                        placeholder="Enter your comment here..."></textarea>
                </div>

                <div className="form-group">
                <p>Rate the course from zero to 5 stars</p><br/>
                    <div className="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" id="submit" className="submit-button">
                    Publish my ranking
                    </button>
                </div>
            </form>

        </div>
    )
};