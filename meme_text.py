def memetext():
    input_text = input("Text to be meme-ified B)")
    input_text_arr = list(input_text)
    for x, y in enumerate(input_text_arr):
        if x == len(input_text_arr)-1:
            break
        elif y != ' ':
            input_text_arr.insert(x, ' ')
    return ''.join(input_text_arr)

print(memetext())
