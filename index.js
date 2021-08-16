
//Accepts Even Numbers as Total # of Sentences in paragraph
function paragrphier() {

    let text = $('#text').val();
    let sentences = $("#sentences option:selected").val();

    const expectedSentenceCount = sentences;
    let overallCount = 0;
    let sentenceCount = 0;
    let previousIndex = 0;

    const totalFullStops = (text.match(/,/g) || []).length;


    $('#sentenceCount').html('Total Number Sentences: ' + totalFullStops);

    let newText = '';

    for (let i = 0; i < text.length; i++) {
        let value = text.charAt(i);

        if (sentenceCount == expectedSentenceCount) {
            newText += text.substring(previousIndex, i) + '</br></br>';
            previousIndex = i;
            sentenceCount = 0;

            if ((totalFullStops - overallCount) < expectedSentenceCount) {
                newText += text.substring(previousIndex, (text.length)) + '</br></br>';
            }
        }

        if (value === '.') {
            sentenceCount += 1;
            overallCount += 1;
        }


    }


    $('#outputText').html(newText);

}