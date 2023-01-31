async function newFormHandler(event) {
    event.preventDefault();

    const tittle = document.querySelector('input[name="post-text"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            tittle,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);