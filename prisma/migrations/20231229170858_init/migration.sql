-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Quiz" (
    "username" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("username", "quiz_name"),
    CONSTRAINT "Quiz_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "username" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    "question_desc" TEXT NOT NULL,

    PRIMARY KEY ("username", "quiz_name", "question_id"),
    CONSTRAINT "Question_username_quiz_name_fkey" FOREIGN KEY ("username", "quiz_name") REFERENCES "Quiz" ("username", "quiz_name") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answer" (
    "username" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_id" INTEGER NOT NULL,
    "answer_desc" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,

    PRIMARY KEY ("username", "quiz_name", "question_id", "answer_id"),
    CONSTRAINT "Answer_username_quiz_name_question_id_fkey" FOREIGN KEY ("username", "quiz_name", "question_id") REFERENCES "Question" ("username", "quiz_name", "question_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
