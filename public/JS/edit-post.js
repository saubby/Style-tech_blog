async function editFromHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

        const tittle = document.querySelector('input[name="post-text"]').value;
        const post_text = document.querySelector('textarea[name="post-text"]').value;

        const response = await fetch(`/api/posts${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                tittle,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            document.location.replace('/dashboard/');
        }
        else {
            alert(response.statusText);
        }
    }
    
    document.querySelector('.edit-post-form').addEventListener('submit', editFromHandler);