class Knife {
  getInfo() {
    return {
      "id":"Knife",
      "name":"Knife",
      "blocks":[
        {
          "opcode":"regex",
          "blockType":"reporter",
          "text":"regex [text] [regex] [x]"
          "arguments":{
            "text": {
              "type":"string",
              "defaultValue":"Hello, world. This world is very worldish."
            },
            "regex": {
              "type":"string",
              "defaultValue":"(world)\b"
            },
            "x": {
              "type":"string",
              "defaultValue":"g"
            }
          }
        },
      ],
      "menus":[]
    }
  }
  regex({text,regex,x}) {
    return new RegExp(regex,x).exec(text)
  }
}
Scratch.extensions.register(new Knife())
