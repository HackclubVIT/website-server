# API

-   Sends an email to the given address. The email will address the given name.

    ```http
    POST /api/contact
    ```

    The body of this `POST` request must contain the following parameters encoded in `application/x-www-form-urlencoded`

    | Request body parameter | Value                             |
    | ---------------------- | --------------------------------- |
    | `name`                 | The name                          |
    | `email`                | _Required_ <br> The email address |

    ### Examples

    **_Normal Request_**

    ```bash
    curl -d "name=abc&email=abc@abc.abc" -X POST $baseURI/api/contact
    ```
    _Status_: 200
    ```json
    {
        "from": "example@example.com",
        "to": ["abc@abc.abc"],
        "accepted": ["abc@abc.abc"],
        "rejected": []
    }
    ```

    **_Bad request_**

    Syntactically invalid email address

    ```bash
    curl -d "name=abc&email=abc@abc" -X POST $baseURI/api/contact
    ```

    _Status_: 400

    ```json
    {
        "message": "Invalid email address"
    }
    ```

    **_Server error_**

    _Status_: 500

    ```json
    {
        "message": "An internal server error has occured. Please try later"
    }
    ```

<hr>
... more soon
