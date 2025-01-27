document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const textArea = document.getElementById("comments");
    const commentList = document.getElementById("commentList");

    submitBtn.addEventListener("click", function() {
        const commentText = textArea.value.trim();
        if (commentText !== "") {
            const newComment = document.createElement("li");
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            textArea.value = ""; // Clear the textarea after submitting
        }
    });
});