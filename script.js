// Navtoggle 
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.navlist');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
});


    document.getElementById('downloadButton').addEventListener('click', function() {
        // Define the filename for the downloaded file
        var filename = 'resume.pdf';

        // Create a blob object for the resume file
        var blob = new Blob([filename], { type: 'application/pdf' });

        // Create a temporary URL for the blob object
        var url = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;

        // Click the link to initiate the download
        link.click();
    });

