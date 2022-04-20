CREATE TABLE [dbo].[VideoActors]
(
	[Id] INT NOT NULL PRIMARY KEY identity(1,1),
	[VideoId] INT NOT NULL,
	[ActorId] INT NOT NULL,
	
	CONSTRAINT [FK_VideoActor_Video] FOREIGN KEY ([VideoId]) REFERENCES [dbo].[Video]([Id]),
	CONSTRAINT [FK_VideoActor_Actor] FOREIGN KEY ([ActorId]) REFERENCES [dbo].[Actor]([Id])
)
