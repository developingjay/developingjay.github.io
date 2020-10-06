---
title: Using the cURL command
date: "2020-10-05"
description: "Using the cUrl command...."
img: ./curlcommand.png
tags: [cURL, Linux] 
---

# What is cURL?

A command line tool and library for transferring data with URL syntax, supporting HTTP, HTTPS, FTP, FTPS, GOPHER, TFTP, SCP, SFTP, SMB, TELNET, DICT, LDAP, LDAPS, MQTT, FILE, IMAP, SMTP, POP3, RTSP and RTMP. libcurl offers a myriad of powerful features

# What is cURL used for?

The cURL command is used for web development. It can be used to test and debug servers and APIs.

Instead of typing commands into the command line manually, they can be bundled in scripts. This allows complex operations to be standardized and automated. This includes both uploading and downloading of data and programmatically filling out forms and mirroring entire websites.

# Do I have to install cURL?

Linux and Windows need to be installed manually. OSX has curl installed by default.

Windows cURL Installation can be found here: https://curl.haxx.se/windows/

Linux can be installed by navigating to the terminal entering: `sudo apt install curl`

# 5 Common cURL Commands

## Query HTTP Header Information
`curl -I www.example.com`

*-I, --head          Show document info only*

```
HTTP/1.1 200 OK
Content-Encoding: gzip
Accept-Ranges: bytes
Age: 323181
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Tue, 06 Oct 2020 02:47:24 GMT
Etag: "3147526947"
Expires: Tue, 13 Oct 2020 02:47:24 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECS (dab/4AD4)
X-Cache: HIT
Content-Length: 648
```
## Make Post Requests

```
curl --data "firstName=John&lastName=Doe" https://yourdomain.com/info.php
```
*-d, --data <data>   HTTP POST data*

## Download Files

```
curl -O http://example.com/yourfile.zip # Save as yourfile.tar.gz
curl -o renamedfile.tar.gz http://example.com/yourfile.zip # Save as renamedfile.zip
```

*-O, --remote-name   Write output to a file named as the remote file*
*-o, --output <file> Write to file instead of stdout*

## Downloading Multiple Files

curl -O http://example.com/info.html -O http://example.com/about.html 

*-O, --remote-name   Write output to a file named as the remote file*

## Use A Proxy With/Without Authentication

`curl -x proxy.yourdomain.com:8080 -U user:password -O http://yourdomain.com/yourfile.tar.gz`

*-x, --proxy [protocol://]host[:port] Use this proxy*

# Want to learn more?

To learn more about cURL check out the following links:

[Basic cURL Tutorial - Traversy Media](https://www.youtube.com/watch?v=7XUibDYw4mc)

[cURL short options](https://curl.haxx.se/docs/manpage.html)


