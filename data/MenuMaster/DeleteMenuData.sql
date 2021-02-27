
DELETE FROM [dbo].[MenuMaster]
      WHERE [MId] = @p_MId

SELECT SCOPE_IDENTITY() AS MId

