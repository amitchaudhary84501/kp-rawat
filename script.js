let currentPage = 1;

function nextPage(pageNum) {
    // Remove active from current page
    document.getElementById(`page${pageNum}`).removeAttribute('active');
    
    // Add active to next page
    document.getElementById(`page${pageNum + 1}`).setAttribute('active', '');
    
    currentPage = pageNum + 1;
}

function previousPage(pageNum) {
    // Remove active from current page
    document.getElementById(`page${pageNum}`).removeAttribute('active');
    
    // Add active to previous page
    document.getElementById(`page${pageNum - 1}`).setAttribute('active', '');
    
    currentPage = pageNum - 1;
}

function showResponse(response) {
    // Remove active from current page
    document.getElementById(`page${currentPage}`).removeAttribute('active');
    
    // Show appropriate response page
    document.getElementById(`response-${response}`).setAttribute('active', '');
    
    // After 15 seconds, redirect based on response
    setTimeout(() => {
        document.getElementById(`response-${response}`).removeAttribute('active');
        
        if (response === 'yes') {
            // First show response page, then redirect to starting page
            document.getElementById('page1').setAttribute('active', '');
            currentPage = 1;
            // Clear input
            const nameInput = document.getElementById('nameInput');
            if (nameInput) nameInput.value = '';
        } else {
            // First show response page, then redirect to previous page
            document.getElementById('page10').setAttribute('active', '');
            currentPage = 10;
        }
    }, 15000); // 15 seconds delay before redirect
}

function restartJourney() {
    // Hide current response page
    document.querySelectorAll('#response-yes, #response-no').forEach(page => {
        page.removeAttribute('active');
    });
    
    // Go back to the question page (page8)
    document.getElementById('page8').setAttribute('active', '');
    currentPage = 8;
} 