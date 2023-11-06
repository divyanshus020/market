import React from 'react'

function Form() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwplo5oPMUve-niq8qicZ8u2cm-RNowypcD-AnXCOrQmcXiG6uJGgV11YMtEvTO4r71Ng/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    
    return (
        <div class="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Please fill the form below</h2>

            <form name='submit-to-google-sheet' >
                <div class="mb-4">
                    <label for="name" class="block text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full p-2 border rounded focus:outline-none focus:border-blue-400" placeholder="John Doe" />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full p-2 border rounded focus:outline-none focus:border-blue-400" placeholder="johndoe@example.com" />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Phone</label>
                    <input type="number" id="number" name="phone" class="w-full p-2 border rounded focus:outline-none focus:border-blue-400" placeholder="+91 0123456789" />
                </div>

                <div class="mb-4">
                    <label for="message" class="block text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full p-2 border rounded focus:outline-none focus:border-blue-400" rows="4" placeholder="Enter your message"></textarea>
                </div>

                <div class="flex justify-between items-center">

                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Submit</button>

                    <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
                </div>
            </form>
        </div>
    )
}

export default Form
