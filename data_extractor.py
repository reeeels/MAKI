import openai

def data_extractor(narrative, stop_tokens = None):
    """
    Return identified and classified data based on relevance.

    Args:
        narrative: text containing patient case note narrative
        stop_tokens (list, optional): List of stop tokens for the LLM. Defaults to None.

    Returns:
        _type_: _description_
    """

    # Define the prompt and parameters for text generation
    prompt = f"Using en_core_sci_lg version 0.5.1, identify and classify the data found in a patient case narrative {narrative} based on the labels SYMPTOMS, MEDICAL_HISTORY,  PHYSICAL_EXAM, MEDICATION,TREATMENT. Return the result as a dictionary with the labels as keys and list of data as values. If the label has no data assign an empty list as its value."
    # prompt = f"Using en_core_sci_lg version 0.5.1, identify and classify the data found in a patient case narrative {narrative} based on the labels ADVERSE_EVENTS, SERIOUS_ADVERSE_EVENTS, UNANTICIPATED_PROBLEMS, PROTOCOL_DEVIATIONS. Return the result as a dictionary with the labels as keys and list of data as values. If the label has no data assign an empty list as its value."


    openai.api_key = "API_KEY" # Replace with your API key

    model = "text-davinci-002"
    params = {
        "temperature": 0.5,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }



    # Generate text using the OpenAI GPT model
    response = openai.Completion.create(
        engine=model,
        prompt=prompt,
        temperature=params['temperature'],
        max_tokens=params['max_tokens'],
        top_p=params['top_p'],
        frequency_penalty=params['frequency_penalty'],
        presence_penalty=params['presence_penalty']
    )

    
    # Print the generated text
    return response.choices[0].text

narrative1 =  """"
A 45-year-old male with a history of hypertension and diabetes presented to the emergency department with severe chest pain. 
The pain started suddenly while he was at home and was described as a crushing sensation that radiated to his left arm. 
An electrocardiogram showed ST-segment elevation in the anterior leads, consistent with an acute myocardial infarction. 
The patient was immediately started on aspirin and heparin and taken to the cardiac catheterization laboratory for emergent percutaneous coronary intervention. 
During the procedure, a 90% stenosis was identified in the left anterior descending artery, which was successfully treated with angioplasty and stent placement.
""" 


narrative2 = """
Client is 72 Yr. old male lives alone. Hx: Bilateral lower extremity edema cellulitis of lower extremities, HTN, 
venous stasis, renal insufficiency, hypercholesterolemia and obesity. A&O X3, self directing. Ambulates and 
transfers independently with walker. Skin is intact. Incontinent of bladder & bowel at times. No issues are 
noted with regards to chewing or swallowing. Appetite is fair, states his appetite is not what it used to be. He is 
very intent on healthy eating and is eager to stop eating high sodium foods. He is 5’8” and is 352#. Senses 
WNL with glasses for reading. Sleeps on a hospital bed which is easier for him to transfer into. PERS checked 
this visit. Response time <2 min reminded client that he is to wear the “button”. Client agrees. Client has his 
own car which he only drives in the summer. Client does his own grocery shopping, laundry, meds and MD 
appointments. However, due to his weakness and limited physical abilities, personal care is recommended 6hrs 
a week to help with household chores and washing his lower extremities. CP safe and adequate for this client.
"""


result = data_extractor(narrative1)
print(result)
