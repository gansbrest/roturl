RotUrl
======

RotURL is a simple substitution cipher for encoding/obscuring URLs embedded in other URLs (e.g. in a querystring)

To avoid increasing size during urlencode, commonly encoded chars are mapped to more rarely used chars. 

## Usage

Module simply exposes object with two methods:

* `rot(str)` - where str is a string you want to encode

* `derot(str)` - reverse operation, takes str and returns original value
