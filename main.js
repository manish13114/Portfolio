<script>
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Fetch the PDF file
    fetch('MANISH.pdf')
        .then(response => response.blob())
        .then(blob => {
            // Create a link element
            const link = document.createElement('a');
            // Create a URL for the blob
            const url = URL.createObjectURL(blob);
            // Set the href attribute to the blob URL
            link.href = url;
            // Set the download attribute to the desired file name
            link.download = 'MANISH.pdf';
            // Append the link to the body
            document.body.appendChild(link);
            // Programmatically click the link to trigger the download
            link.click();
            // Remove the link from the document
            document.body.removeChild(link);
            // Revoke the blob URL to release memory
            URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error fetching the PDF:', error));
});
</script>