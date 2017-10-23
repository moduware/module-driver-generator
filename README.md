# Module Driver Generator
Developer tool for fast module driver generation.

Available for use here - https://nexpaq.github.io/module-driver-generator/

## What is Module Driver Generator?

Every Moduware devices are capable of working with different types of modules, which makes them modular devices. To help you understand what Module Driver is, let’s explain you what are we calling as “module” first.

Module is a piece of hardware that we inserted into our Moduware devices to increase the hardware capability. This could be one of our own, such as LED, battery, USB etc. or one your own creation. In both cases, they need a JSON file, to create the connection between the module and the Moduware app, what we call as Module Driver.

Module Driver is an object that has format definitions of the module commands that has been sent to the modules by the app and definitions of the encoded data that has been sent to the app by the modules. It is like a pre defined format for the communication of app and the module.

If we investigate further down in this file, we will see that its structure has 2 major parts - **Module Commands** and **Received Data**.

In Module Commands, we define the commands that app is sending to the module and refer to it as “commands” in our object. Some of the properties of commands are;

- **Argument** - which indicates name of the argument and validation of it.
- **Command** - command that is defined in firmware.

In Received Data, we explain to the application what the sent data is and how to decode it and refer to it as “data” in our object. Some of the properties of data are;

- **Source** - command that is defined in firmware.
- **Variable** - information about the variables in the data that came.

Module Driver is the essentials of each modules. Without this JSON file, neither app nor the modules would understand what are the intentions of each other. The purpose of this Module Driver Generator is to make the generation of this JSON file easier for developers and to keep it in the certain format required by the app with certain validations and pre-defined fields.
