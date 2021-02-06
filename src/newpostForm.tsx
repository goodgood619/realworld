import './css/newpostForm.css';

function NewpostForm() {
    return (
        <div className = "newpost">
                <form className="signinForm">
                <fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder = "Article Title"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="text" placeholder = "What's this article about?"/>
                    </fieldset>
                    <fieldset>
                    <input className="post_article" type="text" placeholder = "Write your article(in markdown)"/>
                    </fieldset>
                    <fieldset>
                    <input className="post" type="text" placeholder = "Enter tags"/>
                    </fieldset>
                    <button className="signin">Publish Article</button>
                </fieldset>
            </form>
        </div>
    );
}

export default NewpostForm;