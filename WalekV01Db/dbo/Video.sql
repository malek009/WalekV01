CREATE TABLE [dbo].[Video]
(
	[Id] INT NOT NULL PRIMARY KEY identity(1,1),
	[Title] NVARCHAR(256) NOT NULL,
	[Description] NVARCHAR(MAX) NOT NULL,
	[Duration] INT NOT NULL,
	[Episode] INT  NULL,
	[Producer] NVARCHAR(256) NOT NULL,
	[ReleaseDate] DATETIME NOT NULL,
	[UserId] INT NOT NULL,
	[GenderId] int not null,
	CONSTRAINT [UQ_VIDEO_TITLE_PRODUCER] UNIQUE ([Title],[Producer]),
	constraint [FK_Video_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([Id]),
	constraint [FK_Video_Gender] FOREIGN KEY ([GenderId]) REFERENCES [dbo].[Gender] ([Id])
)
