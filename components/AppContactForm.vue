<template>
  <div>
    <form class="contact-form" @submit="checkForm" method="post">

      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

      <div v-if="success">
        <b>Thank you for contacting us!</b>
      </div>

      <div v-if="!success">
        <div>
          <label for="email">Email</label>
          <input class="text-input" type="text" name="email" id="email" v-model="email">
        </div>

        <div>
          <label for="name">Name</label>
          <input class="text-input" type="text" name="name" id="name" v-model="name">
        </div>

        <div>
          <label for="message">Message</label>
          <textarea class="text-input" name="message" id="message" v-model="message"></textarea>
        </div>

        <div>
          <div class="upload-btn-wrapper">
            <button class="button">{{ fileName || 'Upload a file' }}</button>
            <input type="file" accept=".pdf" @change="onFileChange">
          </div>
        </div>

        <div>
          <input class="button" type="submit" :value="inProgress ? 'Sending ...' : 'Submit'">
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['contactPerson', 'subject'],
    data() {
      return {
        success: false,
        inProgress: false,
        errors: [],
        email: null,
        name: null,
        message: null,
        file: null,
        fileName: null
      }
    },
    methods: {
      checkForm(e) {
        if (this.email && this.name && this.message && this.file) {
          const form = new FormData();
          form.append("from", `"${this.name}" <${this.email}>`);
          form.append("to", 'vildantursic@hotmail.com');
          form.append("subject", this.subject);
          form.append("text", this.subject);
          form.append("html", this.message);
          form.append("cv", this.file);
          this.inProgress = true;

          axios.post('http://45.76.90.178:4444/contact', form).then((response) => {
            this.inProgress = false;
            this.success = true;
          }).catch((error) => {
            console.log(error)
          });
        }
        this.errors = [];
        if (!this.email) {
          this.errors.push("Email required.")
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");
        }
        if (!this.message) this.errors.push("Message required.");
        if (!this.file) this.errors.push("File required.");
        e.preventDefault();
      },
      validEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          console.log('error');
        this.fileName = files[0].name
        this.file = files[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .contact-form {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 70px 0;

    * {
      width: 100%;
      margin-bottom: 10px;
    }

    .text-input {
      border: solid 2px $main-color;
      height: 30px;
    }
    textarea {
      height: 100px !important;
      resize: vertical;
    }

    .upload-btn-wrapper {
      position: relative;
      overflow: hidden;
      display: inline-block;
    }

    .upload-btn-wrapper input[type=file] {
      font-size: 100px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }

    .button {
      color: white;
      background: $main-color;
      border: solid 2px $main-color;
      height: 40px;
      width: 50%;
      cursor: pointer;

      &:hover {
        background: #3e88a7;
        border: solid 2px #3e88a7;
      }
    }

    .error {
      color: red;
    }
  }

  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;

    &:hover {
      background: lightblue; /* when mouse over to the drop zone, change color */
    }

    p {
      font-size: 1.2em;
      text-align: center;
      padding: 50px 0;
    }
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
</style>
