BASE URL ---------------------------------------------------------------------
http://127.0.0.1:5000
*This is the base URL for me to use the API I created using FLASK

ERROR FIELD ---------------------------------------------------------------
Response :
{
  "message": "Validasi gagal",
  "errors": {
    "title": ["Field ini wajib diisi"]
  }
} 

END POINTS ------------------------------------------------------------------
For this API, I created 4 method [GET, POST, UPDATE, DELETE]
•	GET (@GET)
How to use it :
/forums

Response (200 OK) :
[
  {
    "id": 1,
    "title": "Judul Forum",
    "content": "Isi forum"
  },
  {
    "id": 2,
    "title": "Forum kedua",
    "content": "Isi forum kedua"
  }
]

•	POST (@POST)
How to use it :
/forums

Response (200 OK) :
[
  {
    "id": 1,
    "title": "Judul Forum",
    "content": "Isi forum"
  },
  {
    "id": 2,
    "title": "Forum kedua",
    "content": "Isi forum kedua"
  }
]

•	UPDATE (@UPDATE)
How to use it :
/forums

Body :
{
  "title": "Judul Baru",
  "content": "Isi dari forum"
}

Response (201CREATED) : 
{
  "message": "Forum berhasil dibuat",
  "data": {
    "id": 3,
    "title": "Judul Baru",
    "content": "Isi dari forum"
  }
}

•	DELETE (@DELETE)
How to use it :
/forums

Response (200 OK) : 
{
  "message": "Forum berhasil dihapus"
}
